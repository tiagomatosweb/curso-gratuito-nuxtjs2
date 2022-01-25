<template>
  <div>
    <header class="bg-gray-800">
      <nav>
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="flex-1 flex items-center items-stretch justify-start">
              <div class="flex-shrink-0 flex items-center">
                <img
                  class="block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                >
              </div>

              <div class="hidden sm:block sm:ml-6">
                <div class="flex space-x-4">
                  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                  <a
                    href="#"
                    class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >Home
                  </a>

                  <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Categorias
                  </a>
                </div>
              </div>
            </div>

            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <div>
                  <button
                    type="button"
                    class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <div class="max-w-7xl mx-auto p-4">
      <div class="mt-4">
        <div class="flex items-center justify-between">
          <h1 class="font-bold text-2xl">
            Categorias
          </h1>
        </div>

        <div class="mt-6">
          <div>
            <div class="flex items-center space-x-3">
              <div>
                <AppFormInput />
              </div>

              <AppButton>
                Adicionar
              </AppButton>
            </div>
          </div>

          <table class="mt-4 min-w-full divide-y divide-gray-200 shadow">
            <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Categoria
              </th>
              <th
                scope="col"
                class="relative px-6 py-3"
              >
                <span class="sr-only">Edit</span>
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr class="bg-white">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <div class="w-72">
                  <AppFormInput />
                </div>
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
                <a
                  href="#"
                  class="text-indigo-600 hover:text-indigo-900"
                >Edit
                </a>

                <a
                  href="#"
                  class="text-red-600 hover:text-red-900"
                >Excluir
                </a>
              </td>
            </tr>

            <tr class="bg-white">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Categoria 2
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
                <a
                  href="#"
                  class="text-indigo-600 hover:text-indigo-900"
                >Edit
                </a>

                <a
                  href="#"
                  class="text-red-600 hover:text-red-900"
                >Excluir
                </a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/Ui/AppButton';
import AppFormInput from '~/components/Ui/AppFormInput';
import AppFormLabel from '~/components/Ui/AppFormLabel';

export default {
  name: 'categoriesPage',

  components: {
    AppButton,
    AppFormInput,
    AppFormLabel,
  },

  data() {
    return {};
  },

  methods: {},
};
</script>
