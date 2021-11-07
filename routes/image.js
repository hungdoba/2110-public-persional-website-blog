const multer = require("multer");
const { google } = require("googleapis");
const streamifier = require("streamifier");
const router = require("express").Router();

// upload image
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/upload", upload.single("image"), (req, res) => {
    try {
        const oauth2Client = new google.auth.OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            process.env.REDIRECT_URI
        );

        oauth2Client.setCredentials({
            refresh_token: process.env.REFRESH_TOKEN,
        });

        const drive = google.drive({
            version: "v3",
            auth: oauth2Client,
        });

        async function uploadFile() {
            try {
                const response = await drive.files.create({
                    requestBody: {
                        name: req.file.originalname,
                        mimeType: req.file.mimetype,
                    },
                    media: {
                        mimeType: req.file.mimetype,
                        body: streamifier.createReadStream(req.file.buffer),
                    },
                });

                console.log(response);

                const fileId = response.data.id;
                await drive.permissions.create({
                    fileId: fileId,
                    requestBody: {
                        role: "reader",
                        type: "anyone",
                    },
                });

                // const result = await drive.files.get({
                //     fileId: fileId,
                //     fields: "webViewLink",
                // });

                res.status(200).json(response.data.id);
            } catch (err) {
                res.status(500).json(err.data);
            }
        }
        uploadFile();
    } catch (err) {
        res.status(500).json(err.data);
    }
});

router.delete("/delete", async (req, res) => {
    try {
        async function deleteFile() {
            const response = await drive.files.delete({
                fileId: "",
            });
            console.log(response.data, response.status);
            res.status(200).json(result.data);
        }
        deleteFile();
    } catch (error) {
        res.status(500).json(error.data);
    }
});

module.exports = router;
