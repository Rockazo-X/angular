# angular
Proyecto para pruebas de Angular 

1. Para iniciar proyecto angular:

  - npm install
  - npm start
  
2. Para construir app para ambiente productivo

  - ng build --prod
  
3. DynamicEnvironment

Ambiente dinamico, basado en las variables agregadas en el archivo assets/app-config.json, la idea es que cada ambiente, tenga su propio archivo de configuracion y este sea reemplazado
segun corresponda. Para una prueba real, se levantaron dos mock, uno en el puerto 4000 y otro en el puerto 8000. Así, dos diferentes app-config.json podrian ser agregados a un mismo dist
y generar un comportamiento diferente debido al cambio en la informacion (La informacion emulada de cada mock, se encuentra en su archivo db.json).

4. En la clase app.module.ts se debe agregar una funcion que cargue al inicio de la aplicacion

`export function init_app(appLoadService: AppInitService) {
  return () => appLoadService.init();
}`

ademas de agregar al apartado de providers:

 `providers: [
    HeroesService,
    MicroserviciosServices,
    AppInitService,{
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppInitService],
      multi:true
    }`

Al mismo nivel de app.module.ts se creo la clase app-init-service-ts la cual realiza el binding hacia el archivo json


# Mock
 
Se configuraron dos mock listos para ser levantados en diferentes puertos, para levantar ejecutar

  - npm install
  - npm start
