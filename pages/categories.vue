<template>
  <div>
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
