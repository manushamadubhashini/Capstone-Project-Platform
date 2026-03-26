module.exports = {
    apps: [
        {
            name: "Config-Server",
            args: "java -jar ./Config-Server/target/Config-Server-1.0.0.jar",
            log_file: "./logs/Config-Server.log"
        },
        {
            name: "Service-Registry",
            args: "java -jar ./Service-Registry/target/Service-Registry-1.0.0.jar",
            log_file: "./logs/Service-Registry.log"
        },
        {
            name: "Api-Gateway",
            args: "java -jar ./Api-Gateway/target/Api-Gateway-1.0.0.jar",
            log_file: "./logs/Api-Gateway/logs/.log"
        }
    ]
}