const HEADER = document.querySelector('header');
const NAV = document.querySelector('nav')
const FOOTER = document.querySelector('footer');

HEADER.innerHTML = `
<div class="header-content">
                <label for="menu-toggle">
                    <span class="las la-bars"></span>
                </label>
                
                <div class="header-menu">
                    <label for="">
                        <span class="las la-search"></span>
                    </label>

                    
                    <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
                    <span class="sr-only">Open user menu</span>
                    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo">
                    </button>

                    <!-- Dropdown menu -->
                    <div id="dropdownAvatar" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>Bonnie Green</div>
                    <div class="font-medium truncate">name@flowbite.com</div>
                    </div>
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                    <li>
                        <a href="miperfil.html" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mi perfil</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Configuración</a>
                    </li>
                    </ul>
                    <div class="py-2">
                    <a href="index.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </div>
                    </div>
            </div>
`;
NAV.innerHTML = `
<div class="side-header">
            <h3>C<span>razy driving</span></h3>
        </div>
        
        <div class="side-content">
            <div class="profile">
                <div class="profile-img bg-img" style="background-image: url(img/3.jpeg)"></div>
                <h4>Admin</h4>
                <small>Bienvenido</small>
            </div>

            <div class="side-menu">
                <ul>
                    <li>
                    
                       <a href="dasboard.html" class="active">
                            <span class="las la-home"></span>
                            <small>Dashboard</small>
                        </a>
                    </li>
                    <li>
                       <a href="cliente.html">
                            <span class="las la-user-alt"></span>
                            <small>Cliente</small>
                        </a>
                    </li>
                    <li>
                       <a href="telefono.html">
                            <span class="las la-phone"></span>
                            <small>Teléfono</small>
                        </a>
                    </li>
                    <li>
                       <a href="tipo_telefono.html">
                            <span class="la la-mobile-phone"></span>
                            <small>Tipo teléfono</small>
                        </a>
                    </li>
                    <li>
                        <a href="examinadora.html">
                            <span class="las la-school"></span>
                            <small>Examinadora</small>
                        </a>
                    </li>   
                    
                    <li>
                       <a href="inscripcion.html">
                            <span class="las la-clipboard-list"></span>
                            <small>Inscripcion</small>
                        </a>
                    </li>
                    <li>
                       <a href="sucursal.html">
                            <span class="las la-list-ul"></span>
                            <small>Sucursal</small>
                        </a>
                    </li>
                    <li>
                       <a href="empleado.html">
                            <span class="las la-users-cog"></span>
                            <small>Empleado</small>
                        </a>
                    </li>
                    <li>
                       <a href="cliente_asesor.html">
                            <span class="las la-user-check"></span>
                            <small>Asignación de asesor</small>
                        </a>
                    </li>

                    <li>
                       <a href="horario.html">
                            <span class="las la-calendar-alt"></span>
                            <small>Horario</small>
                        </a>
                    </li>
                    <li>
                       <a href="bitacora.html">
                            <span class="las la-clipboard-check"></span>
                            <small>Bitacora</small>
                        </a>
                    </li>
                    <li>
                       <a href="paquete.html">
                            <span class="las la-box-open"></span>
                            <small>Paquete</small>
                        </a>
                    </li>
                    <li>
                        <a href="marca.html">
                            <span class="las la-tasks"></span>
                            <small>Marca</small>
                        </a>
                    </li>
                    <li>
                        <a href="modelo.html">
                            <span class="las la-tasks"></span>
                            <small>Modelo</small>
                        </a>
                    </li>
                    <li>
                        <a href="vehiculo.html">
                            <span class="las la-car-side"></span>
                            <small>Vehiculo</small>
                        </a>
                    </li>
                    <li>
                        <a href="detalle_licencia.html">
                            <span class="las la-screwdriver"></span>
                            <small>Detalle de licencia</small>
                        </a>
                    </li>
                    <li>
                       <a href="detalle_paquete.html">
                            <span class="las la-boxes"></span>
                            <small>Detalle de paquete</small>
                        </a>
                    </li>
                    <li>
                       <a href="usuario.html">
                            <span class="las la-users"></span>
                            <small>Usuario</small>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
`;
FOOTER.innerHTML = `


    

<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
</span>
<ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <li>
        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
    </li>
    <li>
        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
    </li>
    <li>
        <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
    </li>
    <li>
        <a href="#" class="hover:underline">Contact</a>
    </li>
</ul>


`;