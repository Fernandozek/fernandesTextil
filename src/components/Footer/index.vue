<template>
  <footer class="bg-gray-900 text-white p-8 w-full">
    <div
      class="container mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8"
    >
      <!-- Logo e Descrição -->
      <div>
        <img
          src="/src/assets/images/logo.png"
          alt="Logo da Empresa"
          class="mb-4 w-24"
        />
        <p>
          Fernandes Textil - Potencialize seus lucros com peças direto da
          fábrica.
        </p>
      </div>

      <!-- Contatos -->
      <div>
        <h3 class="font-bold text-lg mb-4">Contatos</h3>
        <ul class="space-y-2">
          <li>📞 (84) 9 9847-7441</li>
          <li>📧 contato@fabricaf.com</li>
          <li>📍 Avenida Rio Branco, 112, Jardim de Piranhas - RN</li>
        </ul>
      </div>

      <!-- Localização -->
      <div>
        <h3 class="font-bold text-lg mb-4">Localização</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d471.06516704881074!2d-37.33967803553495!3d-6.382333258824275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1736690990364!5m2!1spt-BR!2sbr"
          width="100%"
          height="150"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      <!-- Redes Sociais -->
      <div>
        <h3 class="font-bold text-lg mb-4">Siga-nos</h3>
        <ul class="flex gap-4">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61558422317281"
              target="_blank"
              class="hover:bg-gray-900"
            >
              <svg
                enable-background="new 0 0 100 100"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                version="1.1"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:svgjs="http://svgjs.dev/svgjs"
              >
                <g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)">
                  <g id="Layer_1" />
                  <g id="Layer_2">
                    <g>
                      <path
                        d="m50 2.5c-58.892 1.725-64.898 84.363-7.46 95h7.46 7.46c57.451-10.647 51.419-93.281-7.46-95z"
                        fill="#1877f2"
                        fill-opacity="1"
                        data-original-color="#1877f2ff"
                        stroke="none"
                        stroke-opacity="1"
                      />
                      <path
                        d="m57.46 64.104h11.125l2.117-13.814h-13.242v-8.965c0-3.779 1.85-7.463 7.781-7.463h6.021v-11.761c-12.894-2.323-28.385-1.616-28.722 17.66v10.529h-12.123v13.814h12.123v33.396h7.46 7.46z"
                        fill="#f1f1f1"
                        fill-opacity="1"
                        data-original-color="#f1f1f1ff"
                        stroke="none"
                        stroke-opacity="1"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/fernandes_textil.of/"
              target="_blank"
              class="hover:bg-gray-900"
            >
              <svg
                enable-background="new 0 0 24 24"
                height="2em"
                viewBox="0 0 24 24"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                xmlns:svgjs="http://svgjs.dev/svgjs"
              >
                <g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)">
                  <linearGradient
                    id="SVGID_1_"
                    gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)"
                    gradientUnits="userSpaceOnUse"
                    x1="-37.106"
                    x2="-26.555"
                    y1="-72.705"
                    y2="-84.047"
                  >
                    <stop stop-opacity="1" stop-color="#ffdd55" offset="0" />
                    <stop stop-opacity="1" stop-color="#ff543e" offset="0.5" />
                    <stop stop-opacity="1" stop-color="#c837ab" offset="1" />
                  </linearGradient>
                  <path
                    d="m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.559-.081-.671-.105-3.539-.11-10.173.005-12.403-.448-14.41 1.633z"
                    fill="url(#SVGID_1_)"
                    data-original-color="SVGID_1_"
                    stroke="none"
                    stroke-opacity="1"
                  />
                  <path
                    d="m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z"
                    fill="#ffffff"
                    fill-opacity="1"
                    data-original-color="#ffffffff"
                    stroke="none"
                    stroke-opacity="1"
                  />
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=+5584998477441&text=Ol%C3%A1,%20gostaria%20de%20consultar%20os%20produtos%20da%20Fernandes%20textil."
              target="_blank"
              class="hover:bg-gray-900"
            >
              <svg
                enable-background="new 0 0 24 24"
                height="2em"
                viewBox="0 0 24 24"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:svgjs="http://svgjs.dev/svgjs"
              >
                <g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)">
                  <path
                    d="m20.52 3.449c-2.28-2.204-5.28-3.449-8.475-3.449-9.17 0-14.928 9.935-10.349 17.838l-1.696 6.162 6.335-1.652c2.76 1.491 5.021 1.359 5.716 1.447 10.633 0 15.926-12.864 8.454-20.307z"
                    fill="#eceff1"
                    fill-opacity="1"
                    data-original-color="#eceff1ff"
                    stroke="none"
                    stroke-opacity="1"
                  />
                  <path
                    d="m12.067 21.751-.006-.001h-.016c-3.182 0-5.215-1.507-5.415-1.594l-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-8.793 10.745-13.19 16.963-6.975 6.203 6.15 1.848 16.875-7.026 16.875z"
                    fill="#4caf50"
                    fill-opacity="1"
                    data-original-color="#4caf50ff"
                    stroke="none"
                    stroke-opacity="1"
                  />
                  <path
                    d="m17.507 14.307-.009.075c-.301-.15-1.767-.867-2.04-.966-.613-.227-.44-.036-1.617 1.312-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.042-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"
                    fill="#fafafa"
                    fill-opacity="1"
                    data-original-color="#fafafaff"
                    stroke="none"
                    stroke-opacity="1"
                  />
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-8 text-center border-t border-gray-700 pt-4">
      <p>
        © {{ new Date().getFullYear() }} Fábrica Fernandes. Todos os direitos
        reservados.
      </p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
footer ul li a {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}
</style>
