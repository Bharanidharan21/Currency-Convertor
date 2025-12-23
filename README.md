# Currency Converter Application (Spring Boot)

## Project Overview
A backend-focused Currency Converter application developed using Spring Boot.  
The application converts currency values using an external exchange rate API and stores conversion history in a database.  
The frontend is currently under development, and the main focus of this project is backend functionality and API design.

## Tech Stack
- Java  
- Spring Boot  
- Spring Data JPA  
- Spring Security (API Key based authentication)  
- H2 Database  
- RESTful APIs  
- HTML, CSS, JavaScript (Frontend – in progress)

## Features
- Currency conversion between any two currencies  
- External currency exchange rate API integration  
- Conversion history stored in database  
- Secure API access using API Key  
- Clean REST API architecture  

## Application Structure
- Controller Layer – Handles HTTP requests  
- Service Layer – Business logic and currency calculation  
- Repository Layer – Database operations  
- Entity Layer – Conversion history model  
- Security Layer – API key validation  

## Frontend Status
Frontend development is in progress.
- Basic UI is created
- API integration and styling are not fully completed
- Backend APIs are fully functional and tested using Postman

## Known Limitations
- Frontend may return 403 Forbidden due to API security configuration  
- UI output may display undefined values during development  

## Future Enhancements
- Complete frontend integration  
- Improve UI/UX  
- Role-based authentication  
- Deployment to cloud platform  
- React-based frontend  

## Learning Outcomes
- Spring Boot project structure  
- REST API development  
- External API integration  
- API security implementation  
- Backend-focused application design  

## Note
This project primarily demonstrates backend development skills.  
Frontend improvements will be added in future updates.
