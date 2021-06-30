build:
	docker build -t javascript-microservices-test-project:latest .

run: 
	docker run -it -p 3000:3000 javascript-microservices-test-project