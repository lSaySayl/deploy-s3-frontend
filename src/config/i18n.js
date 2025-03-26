import { I18n } from '@aws-amplify/core';

// Configuración de traducciones
I18n.putVocabularies({
    es: {
        'Sign In': 'Iniciar Sesión',
        'Sign Up': 'Registrarse',
        'Forgot your password?': '¿Olvidaste tu contraseña?',
        'Reset your password': 'Restablecer tu contraseña',
        'Username': 'Nombre de usuario',
        'Password': 'Contraseña',
        'Sign Out': 'Cerrar Sesión',
        'Back to Sign In': 'Volver a Iniciar Sesión',
        'Send Code': 'Enviar Código',
        'Confirm': 'Confirmar',
        'Sign in': 'Iniciar sesión',
        'Create Account': 'Crear cuenta',
        'Enter your Email': 'Ingresa tu correo',
        'Enter your Password': 'Ingresa tu contraseña',
        'Please confirm your Password': 'Por favor, confirma tu contraseña',
        'Confirm Password': 'Confirma tu contraseña',
        'Email': 'Correo',
        'Reset Password': 'Restablecer contraseña',
        'Send code': 'Enviar código',
        'Enter your email': 'Ingresa tu correo',
        'Code *': 'Código *',
        'New Password': 'Nueva contraseña',
        'Submit': 'Enviar',
        'Resend Code': 'Reenviar código',
        'Sending...': 'Enviando...',
        'Submitting...': 'Enviando...',
        'Your passwords must match': 'Tus contraseñas deben coincidir',
        'Password must have at least 8 characters': 'La contraseña debe tener al menos 8 caracteres',
        'Username/client id combination not found.': 'Combinación de nombre de usuario / ID de cliente no encontrada.',
        'Attempt limit exceeded, please try after some time.': 'Se ha excedido el límite de intentos, por favor intente después de algún tiempo.',
        'Signing in': 'Iniciando sesión',
        'We Emailed You': 'Te hemos enviado un correo',
        'Your code is on the way. To log in, enter the code we emailed to': 'Tu código está en camino. Para iniciar sesión, ingresa el código que te enviamos por correo',
        '. It may take a minute to arrive.': 'Puede tardar un minuto en llegar.',
        'Confirmation Code': 'Código de confirmación',
        'Enter your code': 'Ingresa tu código',
        'User already exists': 'El usuario ya existe',
        'Confirming': 'Confirmando',
        'Incorrect username or password.': 'Nombre de usuario o contraseña incorrectos.',
    },
});

// Establecer el idioma a español
I18n.setLanguage('es');