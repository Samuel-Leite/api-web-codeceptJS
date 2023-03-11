/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type loginPage = typeof import('./pages/login_page.js');
type homePage = typeof import('./pages/home_page.js');
type productPage = typeof import('./pages/product_page.js');
type cartPage = typeof import('./pages/cart_page.js');
type jsonSchema = typeof import('./resource/api/jsonSchema.js');
type responseValidation = typeof import('./resource/api/responseValidation.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, homePage: homePage, productPage: productPage, cartPage: cartPage, jsonSchema: jsonSchema, responseValidation: responseValidation }
  interface Methods extends REST, JSONResponse {}
  interface I extends ReturnType<steps_file>, WithTranslation<JSONResponse> {}
  namespace Translation {
    interface Actions {}
  }
}
