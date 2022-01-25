<template>
  <div>
    <div class="flex items-center justify-between">
      <h1 class="font-bold text-2xl">
        Transações
      </h1>

      <AppButton @click="isAdding = !isAdding">
        Nova transação
      </AppButton>
    </div>

    <TransactionAdd
      v-if="isAdding"
      @cancel="isAdding = false"
    />

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

        <div
          v-for="(group, index) in transactionGrouped"
          :key="index"
        >
          <div class="mb-1">
            <div class="font-bold text-sm">
              {{ formatDate(index) }}
            </div>
          </div>

          <div class="space-y-3">
            <div
              v-for="transaction in group"
              :key="transaction.id"
              class="flex items-center px-5 py-6 bg-white rounded-lg shadow"
            >
              <div class="flex items-center space-x-5">
                <div>
                  <div>
                    <div class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      {{ transaction.category.name }}
                    </div>
                  </div>

                  <div class="mt-1.5">
                    {{ transaction.description }}
                  </div>
                </div>
              </div>

              <div class="flex items-center space-x-4 ml-auto">
                <div class="flex items-center">
                  <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>

                  <div class="font-bold">
                    {{ transaction.amount }}
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
</template>

<script>
import { groupBy, orderBy } from 'lodash';
import TransactionAdd from '~/components/Transactions/TransactionAdd';
import AppButton from '~/components/Ui/AppButton';
import AppFormInput from '~/components/Ui/AppFormInput';
import AppFormLabel from '~/components/Ui/AppFormLabel';
import AppFormSelect from '~/components/Ui/AppFormSelect';

export default {
  name: 'IndexPage',

  components: {
    TransactionAdd,
    AppButton,
    AppFormInput,
    AppFormLabel,
    AppFormSelect,
  },

  async asyncData({ store }) {
    return {
      transactions: await store.dispatch('transactions/getTransactions'),
    }
  },

  data() {
    return {
      isAdding: false,
    }
  },

  computed: {
    transactionGrouped() {
      return groupBy(orderBy(this.transactions, 'date', 'desc'), 'date');
    },
  },

  methods: {
    formatDate(date) {
      return this.$dayjs(date).format('DD/MM/YYYY');
    },
  },
}
</script>
