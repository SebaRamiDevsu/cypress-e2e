--- Nota ---
Se realizó 3 archivos de prueba, la solicitud del ejercicio fue de realizar todo un flujo de añadir productros al carrito y realizar una compra
Para el archivo de login.cy.js se realiza solamente el login para la plataforma
Para el archivo de additems.cy.js se realiza el login de un usuario a la plataforma más el añadimiento de 2 productos al carrito de compras
Para el archivo de purchase.cy.js se realiza el flujo completo solicitado:
    añadir 2 productos al carrito > visualizar el carrito > completar el formulario de compra > finalizar la compra
---------

Requerimientos
- Tener instalado NodeJs

Pasos para instalar las dependencias:
1. Ingresar a la carpeta cypress-e2e-api
2. Abrir una terminal apuntando a la carpeta
3. Ejecutar 'npm install' ( Ésto creara la carpeta node_modules)

Como correr los archivos para las pruebas:

Usando la interfaz visual de Cypress:
1. Abrir una terminal
2. Ejectuar 'npx cypress open'
3. Seleccionar E2E Testing
4. Seleccionar un navegador ( de preferencia Chrome )
5. Seleccionar algún archivo de prueba ( purchase.cy.js )

Utilizando los scripts con la bandera --headed
1. Abrir un terminal
2. Correr uno de los siguientes scripts acorte a los archivos mencionados en la nota:
    - npm run login-test     -> correrá login.cy.js
    - npm run additem-test   -> correrá additems.cy.js
    - npm run purchase-test  -> correrá purchase.cy.js

Revisión de los reportes:
Se aconseja para este punto correr solamente el script de purchase.cy.js para que se muestre más limpio el reporte
1. Abrir una terminal y correr 'npm run clean-reports' ( para borrar los archivos generados por los previos reportes )
2. Luego correr 'npm run purchase-test'
3. Luego correr 'allure generate allure-results -o allure-report --clean'
4. Luego correr 'allure open'