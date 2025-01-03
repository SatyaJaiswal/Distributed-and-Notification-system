import dotenv from 'dotenv';
dotenv.config();

export const config={
    // Server Configuration
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',

    // Database Configuration
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/notificationSystem',

    // Kafka Configuration
    KAFKA_CLIENT_ID: process.env.KAFKA_CLIENT_ID || 'notification-service',
    KAFKA_BOOTSTRAP_SERVERS: process.env.KAFKA_BOOTSTRAP_SERVERS || 'http://test',

    // Authentication
    JWT_SECRET: process.env.JWT_SECRET || 'default_secret_key',
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',

    // Notification Limits
    MAX_NOTIFICATIONS_PER_HOUR: parseInt(process.env.MAX_NOTIFICATIONS_PER_HOUR || '5'),

    // Logging
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',

    ELASTICSEARCH_URL: process.env.ELASTICSEARCH_URL || 'http://localhost:9200'
}