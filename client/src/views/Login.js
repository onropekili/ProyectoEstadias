/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Login() {
  return (
    <>
      {/*
      This example requires updating your template:

      ```
      <html class='h-full bg-white'>
      <body class='h-full'>
      ```
    */}
      <div className="flex w-44 h-12 md:w-full md:h-min  top-0 bg-white">
        <img
          className="w-96 h-78"
          src={require('../assets/images/logoEmpresa.jpg')}
          alt="Logo de la empresa"
        />
      </div>

      <div
        className="flex w-auto h-46 left-0 top-119">
        <img
          className="w-1280 h-142"
          src={require('../assets/images/banner.jpg')}
          alt="Logo de la empresa"
        />
      </div>

      <div className='relative min-h flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img
            className='mx-auto h-20 w-20 mt drop-shadow-lg'
            src={require('../assets/images/tlj-logox.png')}
            alt='My Company'
          />
          <h2 className='mt-5 text-center text-2xl font-Foco-Corp-Bold leading-9 tracking-tight text-gray-500'>
            Inicia Sesión
          </h2>
        </div>
        
        <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-5 ' action='#' method='POST'>
            <div>
              <div className='mt-5'>
                <input
                  id='username'
                  name='username'
                  type='username'
                  autoComplete='username'
                  placeholder='Usuario'
                  required
                  className='block mx-auto w-60 p-4 rounded-md drop-shadow-lg font-Foco-Corp border-1 py-2 text-gris ring-2 ring-inset ring-gris placeholder:text-gris placeholder:text-opacity-70 shadow-sm focus:ring-2 focus:ring-gris focus:ring-opacity-75 focus:outline-none sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='mt-5'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  placeholder='Contraseña'
                  autoComplete='current-password'
                  required
                  className='block mx-auto w-60 p-4 rounded-md drop-shadow-lg font-Foco-Corp border-1 py-2 text-gris ring-2 ring-inset ring-gris placeholder:text-gris placeholder:text-opacity-70 shadow-sm focus:ring-2 focus:ring-gris focus:ring-opacity-75 focus:outline-none sm:text-sm sm:leading-6'
                /> 
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex mx-auto w-60 justify-center rounded-md bg-naranja px-3 py-1.5 text-sm font-Foco-Corp-Bold leading-6 text-white shadow-sm hover:bg-naranja hover:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja'
              >
                Iniciar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
