# Distributed Notification and Alert System

## Overview
This project is a distributed notification and alert management system designed to handle user preferences, rules, and delivery of notifications. It supports immediate notifications, scheduled alerts, and personalized delivery times while ensuring efficient processing with query-driven logic.

## Features
1. **Notification Ingestion and Validation**
   - API endpoint (/notify) to receive and validate notification requests.
   - Kafka integration for publishing validated notifications.

2. **Processing and Scheduling Engine**
   - Real-time handling of high-priority notifications.
   - Scheduling engine to handle delayed and batch notifications using MongoDB.

3. **User Preferences and Rules Management**
   - Support for user-defined notification preferences (e.g., quiet hours, channel preferences).
   - MongoDB for storing preferences, Elasticsearch for content indexing and search.

4. **Query-Driven Logic**
   - Throttling notifications based on user limits.
   - Quiet hours filtering and rescheduling.
   - Deduplication of similar alerts.
   - Aggregation of low-priority notifications.
   - Real-time processing of urgent alerts.

5. **Notification Delivery**
   - Support for Email, SMS, and Push Notifications.
   - Retry mechanism for failed deliveries.
   - Logging delivery statuses in MongoDB.

6. **Containerization and Deployment**
   - Dockerized components for easy deployment.
   - Docker Compose setup for orchestrating services.

7. **Analytics and Monitoring** (Bonus)
   - Delivery stats and user engagement analytics.

## Installation and Setup

### Prerequisites
- Typescript
- Docker and Docker Compose
- MongoDB
- Kafka
- Elasticsearch

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/SatyaJaiswal/Distributed-and-Notification-system
   cd notification-system
   ```
3. Build and run services using Docker Compose:
   ```bash
   docker-compose up --build
   ```

4. install dependencies
     ```npm install```
5. run node js project
    ``` npm run dev ```
6. Access the API:
   - Base URL: `http://localhost:3000`

---

## API Endpoints

### Notification Ingestion
- **POST /notify**
  - Description: Accepts notification requests and validates them before publishing to Kafka.
  - Payload Example:
    ```json
    {
        "message": "System update scheduled",
        "priority": "high",
        "send_time": "2024-12-22T10:00:00Z",
        "user_id": "12345"
    }
    ```

### Analytics
- **GET /analytics**
  - Description: Provides delivery statistics and user engagement metrics.

---

## Technologies Used
- **Backend Services**: Node.js, typescript
- **Database**: MongoDB, Elasticsearch
- **Message Broker**: Kafka
- **Containerization**: Docker, Docker Compose

---

## Design Choices
- **Kafka**: Ensures scalability and fault tolerance for notification ingestion.
- **Elasticsearch**: Optimizes content filtering and deduplication.
- **MongoDB**: Provides flexible storage for user preferences and notification metadata.

---

## Known Issues
- Limited retry logic for transient failures.
- Lack of real-time analytics streaming.



