"use strict";

module.exports = {
    api_base_url: process.env.API_BASE_URL || "http://localhost:8082",
    authKey: process.env.AUTH_KEY || "secretKeyRef"
};