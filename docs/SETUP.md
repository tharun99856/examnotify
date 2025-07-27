# Setup

> Created: July 27, 2025

## Overview

This document describes the architecture and API design for the project.

## API Endpoints

| Method | Path         | Description           |
|--------|--------------|-----------------------|
| GET    | /api/v1/data | Retrieve records      |
| POST   | /api/v1/data | Create a new record   |
| PATCH  | /api/v1/data/:id | Update a record   |
| DELETE | /api/v1/data/:id | Remove a record   |

## Deployment

See `.env.example` for required environment variables.
