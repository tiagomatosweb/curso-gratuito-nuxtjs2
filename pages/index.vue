<template>
  <div>
    <header class="bg-gray-800">
      <nav>
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="flex-1 flex items-center items-stretch justify-start">
              <div class="flex-shrink-0 flex items-center">
                <img class="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
              </div>

              <div class="hidden sm:block sm:ml-6">
                <div class="flex space-x-4">
                  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                  <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>

                  <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Categorias</a>
                </div>
              </div>
            </div>

            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <div>
                  <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
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
            Transações
          </h1>

          <AppButton>
            Nova transação
          </AppButton>
        </div>

        <div class="my-4 space-y-4 border-2 border-indigo-200 border-dashed bg-indigo-50 p-5 rounded-xl">
          <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            <div>
              <AppFormLabel>Data da transação</AppFormLabel>
              <AppFormInput type="date" />
            </div>

            <div>
              <AppFormLabel>Valor</AppFormLabel>
              <AppFormInput />
            </div>

            <div>
              <AppFormLabel>Descrição</AppFormLabel>
              <AppFormInput />
            </div>

            <div>
              <AppFormLabel>Categoria</AppFormLabel>
              <AppFormSelect :options="[{ name: 'Licença de softwares', id: 1 }]" />
            </div>
          </div>

          <div class="space-x-4 flex items-center justify-end">
            <a href="" class="inline-flex text-gray-700 text-sm">
              Cancelar
            </a>

            <AppButton>
              Adicionar
            </AppButton>
          </div>
        </div>

        <div class="mt-6 pb-6 flex items-center space-x-4 border-b border-gray-300">
          <div>
            <AppFormLabel>Descrição</AppFormLabel>
            <AppFormInput />
          </div>

          <div>
            <AppFormLabel>Categoria</AppFormLabel>
            <AppFormSelect :options="[{ name: 'Licença de softwares', id: 1 }]" />
          </div>
        </div>

        <div class="mt-4">
          <div class="space-y-8">
            <div>
              <div class="mb-1">
                <div class="font-bold text-sm">
                  04 de Jan
                </div>
              </div>

              <div class="space-y-3">
                <div class="px-5 py-6 bg-white rounded-lg shadow">
                  <div class="flex items-center">
                    <div class="flex items-center space-x-5">
                      <div>
                        <div>
                          <div class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                            Software
                          </div>
                        </div>

                        <div class="mt-1.5">
                          Pagamento de boleto
                        </div>
                      </div>
                    </div>

                    <div class="flex items-center space-x-4 ml-auto">
                      <div class="flex items-center">
                        <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>

                        <div class="font-bold">
                          R$ 43,02
                        </div>
                      </div>

                      <button>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                      </button>
                    </div>
                  </div>

                  <div class="my-4 mt-10 space-y-4">
                    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
                      <div>
                        <AppFormLabel>Data da transação</AppFormLabel>
                        <AppFormInput type="date" />
                      </div>

                      <div>
                        <AppFormLabel>Valor</AppFormLabel>
                        <AppFormInput type="number" />
                      </div>

                      <div>
                        <AppFormLabel>Descrição</AppFormLabel>
                        <AppFormInput />
                      </div>

                      <div>
                        <AppFormLabel>Categoria</AppFormLabel>
                        <AppFormSelect :options="[{ name: 'Licença de softwares', id: 1 }]" />
                      </div>
                    </div>

                    <div class="space-x-4 flex items-center justify-end">
                      <a href="" class="inline-flex text-gray-700 text-sm">
                        Cancelar
                      </a>

                      <AppButton>
                        Editar
                      </AppButton>
                    </div>
                  </div>
                </div>

                <div class="flex items-center px-5 py-6 bg-white rounded-lg shadow">
                  <div class="flex items-center space-x-5">
                    <div>
                      <div>
                        <div class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                          Software
                        </div>
                      </div>

                      <div class="mt-1.5">
                        Pagamento de boleto
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center space-x-4 ml-auto">
                    <div class="flex items-center">
                      <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>

                      <div class="font-bold">
                        R$ 43,02
                      </div>
                    </div>

                    <button>
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="mb-1">
                <div class="font-bold text-sm">
                  04 de Jan
                </div>
              </div>

              <div class="space-y-3">
                <div class="flex items-center px-5 py-6 bg-white rounded-lg shadow">
                  <div class="flex items-center space-x-5">
                    <div>
                      <div>
                        <div class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                          Software
                        </div>
                      </div>

                      <div class="mt-1.5">
                        Pagamento de boleto
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center space-x-4 ml-auto">
                    <div class="flex items-center">
                      <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>

                      <div class="font-bold">
                        R$ 43,02
                      </div>
                    </div>

                    <button>
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                  </div>
                </div>

                <div class="flex items-center px-5 py-6 bg-white rounded-lg shadow">
                  <div class="flex items-center space-x-5">
                    <div>
                      <div>
                        <div class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                          Software
                        </div>
                      </div>

                      <div class="mt-1.5">
                        Pagamento de boleto
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center space-x-4 ml-auto">
                    <div class="flex items-center">
                      <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>

                      <div class="font-bold">
                        R$ 43,02
                      </div>
                    </div>

                    <button>
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/Ui/AppButton';
import AppFormInput from '~/components/Ui/AppFormInput';
import AppFormLabel from '~/components/Ui/AppFormLabel';
import AppFormSelect from '~/components/Ui/AppFormSelect';

export default {
  name: 'IndexPage',

  components: {
    AppButton,
    AppFormInput,
    AppFormLabel,
    AppFormSelect,
  },

  data() {
    return {
    }
  }
}
</script>
