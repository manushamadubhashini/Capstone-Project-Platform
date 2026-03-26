module.exports = {
    apps: [
        {
            name: "config-server",
            script: "java",
            args: "-jar ./Config-Server/target/Config-Server-1.0.0.jar",
            log_file: "./logs/Config-Server.log"
        },
        {
            name: "service-registry",
            script: "java",
            args: "-jar ./Service-Registry/target/Service-Registry-1.0.0.jar",
            log_file: "./logs/Service-Registry.log"
        },
        {
            name: "api-gateway",
            script: "java",
            args: "-jar ./Api-Gateway/target/Api-Gateway-1.0.0.jar",
            log_file: "./logs/Api-Gateway.log"
        }
    ]
};