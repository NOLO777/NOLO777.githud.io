/**
 * Conversor de unidades en JavaScript
 * Hecho con Vue.JS 2 + Bulma CSS
 * @ autor parzibyte
 */
 const app = new  Vue ( {
    el : '#app' ,
    datos : ( )  =>  ( {
        baseSeleccionada : "10" ,
        binario : "" ,
        octal : "" ,
        decimal : "" ,
        hexadecimal : "" ,
        numero : "" ,
        // Lo siguiente controla únicamente el mensaje de notificación 
        mostrarNotificacion : false ,
    } ) ,
    métodos : {
        onBaseONumeroCambiado ( )  {
            esto . convertirDeDecimalALasDemasBases ( parseInt ( este . numero ,  este . baseSeleccionada ) ) ;
        } ,
        /**
         * ¿Para qué hacer conversiones y muchos ifs, si
         * podemos convertir primero a decimal y de ahi a
         * las demás bases?
         */
        convertirDeDecimalALasDemasBases ( numero )  {
            si  ( ! numero )
                volver ;
            esto . binario  =  numero . toString ( "2" ) ;
            esto . octal  =  numero . toString ( "8" ) ;
            esto . decimal  =  numero . toString ( "10" ) ;
            esto . hexadecimal  =  numero . toString ( "16" ) ;
        } ,
        /**
         * @ver https://parzibyte.me/blog/2018/08/24/acceder-al-portapapeles-con-javascript/
         */
        copiarAlPortapapeles ( texto )  {
            if  ( ! texto )  return ;
            if  ( ! navigator . clipboard )  {
                return this. copiarAlPortapapelesSiLaPrimeraOpcionFalla ( texto ) ;
            }
            navegador . portapapeles . writeText ( texto )
                . entonces ( ( )  =>  {
                    consola . log ( "El texto ha sido copiado :-)" ) ;
                    esto . indicarCopiadoExitoso ( ) ;
                } )
                . catch ( error  =>  {
                    // Por si el usuario no da permiso u ocurre un error
                    consola . log ( "Hubo un error:" ,  error ) ;
                    esto . copiarAlPortapapelesSiLaPrimeraOpcionFalla ( texto ) ;
                } ) ;
        } ,
        copiarAlPortapapelesSiLaPrimeraOpcionFalla ( texto )  {
            prompt ( "Presiona CTRL + C para copiar, y luego presiona ENTER" ,  texto ) ;
            esto . indicarCopiadoExitoso ( ) ;
        } ,
        indicarCopiadoExitoso ( )  {
            esto . mostrarNotificacion  =  true ;
            setTimeout ( ( )  =>  {
                esto . mostrarNotificacion  =  false ;
            } ,  1000 ) ;
        }
    } ,
    /**
     * Vigilar si cambia la base o el número
     * @ver https://parzibyte.me/blog/2018/11/05/watch-vue-js-2/
     */
    ver : {
        baseSeleccionada ( )  {
            esto . onBaseONumeroCambiado ( ) ;
        } ,
        numero ( )  {
            esto . onBaseONumeroCambiado ( ) ;
        }
    }
} ) ;