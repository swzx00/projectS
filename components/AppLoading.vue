<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useLoadingStore } from '~/stores/loadingStore'

// 監控 Loading 狀態
const { isLoading } = storeToRefs(useLoadingStore())
</script>

<template>
  <div
    v-if="isLoading"
    class="max-w-dvw pointer-events-auto fixed bottom-0 left-0 right-0 top-0 z-[9999] flex h-dvh max-h-dvh w-dvw cursor-progress items-center justify-center bg-gray-50/80"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" class="logo-loading">
      <defs>
        <mask id="fill-mask01">
          <rect width="40" height="40" fill="black" />
          <rect class="mask-anim" width="40" height="40" fill="white" />
        </mask>
        <mask id="fill-mask02">
          <rect width="40" height="40" fill="black" />
          <rect class="mask-anim" width="40" height="40" fill="white" />
        </mask>
      </defs>
      <g mask="url(#fill-mask01)">
        <path
          fill="#AA0E0E"
          fill-rule="evenodd"
          d="M0 0v40h40V0H0Zm38.918 38.918H1.082V1.082h37.836v37.836ZM2.164 2.164V9.73H9.73V2.164H2.164Zm6.484 6.484H3.242V3.242h5.406v5.406ZM7.566 4.324H4.324v3.242h3.242V4.324ZM30.27 9.73V2.164h7.566V9.73H30.27Zm1.082-1.082h5.406V3.242h-5.406v5.406Zm1.082-4.324h3.242v3.242h-3.242V4.324ZM2.164 30.27v7.566H9.73V30.27H2.164Zm6.484 6.488H3.242v-5.406h5.406v5.406Zm-1.082-4.324H4.324v3.242h3.242v-3.242Zm23.786-2.164H30.27v1.082h1.082V30.27Zm-3.242-2.16v5.402h-5.407v4.324h1.082v-3.242h6.485v2.164h-5.407v1.078h6.49v-4.324h2.16v-2.16h1.081v6.484h1.082v-9.727h-1.082v2.16h-1.082v-4.324h2.164v-1.082H22.703v1.082h9.73v1.082h-9.73v1.082h10.81l-5.403.001Zm4.324 4.324h-3.246v-3.246h3.246v3.246ZM8.648 10.813H9.73v1.078H8.648v-1.078Zm0 2.16H9.73v1.082H8.648v1.082H3.242v4.323H19.46v5.403h-6.488v5.407h6.488v1.082h-6.488v5.406h6.488v1.078h-8.649v-1.078h1.08v-5.406h-1.08V30.27h1.08v-6.485h6.49v-3.246H2.163v-9.726h1.078v3.242h5.406v-1.082Zm0 2.164H9.73v1.078H8.648v-1.078Zm0 2.14H9.73v1.078H8.648v-1.078Zm0 4.344H9.73v1.082H8.648v-1.082Zm0 4.324H9.73v1.082H8.648v-1.082Zm14.055 4.325h5.406v1.082h-5.406V30.27ZM2.164 23.785v5.402h1.078v-4.324H9.73v-1.078H2.164Zm6.484 4.324H9.73v1.078H8.648v-1.078Zm3.243-19.461h-1.079V9.73h1.08V8.648Zm1.082 0h-1.082V5.406h1.082v3.242Zm0 0V9.73h1.082V8.648h-1.082Zm6.488-3.242H18.38v3.242h1.082V5.406Zm0-2.164h-8.649l.001 1.082h8.648V3.242Zm-3.246 5.406h-1.078V9.73h1.078V8.648ZM30.27 20.54v1.08h7.574v1.083h-.008v15.133h-1.078V22.703H21.621v15.134h-1.08V21.622h7.57V20.54h2.16ZM18.38 9.73v5.407h-5.406V9.73H11.89v6.485h7.57V9.73h1.078V8.648H19.46V9.73h-1.081Zm-1.102-1.082h1.078V9.73h-1.078V8.648Zm20.559 4.325V11.89H20.539v1.082h7.57v2.164h-7.57v1.078h7.57v2.164h-7.57v1.082h17.297v-1.082H30.27v-2.164h7.566v-1.078H30.27v-2.164l7.566.001Zm-9.728-4.325V9.73h-1.082V8.648h-1.082V9.73h-1.082V8.648h-1.078V9.73h-1.082V8.648h-1.08V7.566h7.567V6.488h-7.57V4.324h7.568v-2.16h-1.08v1.078H21.62V2.164h-1.08v6.484h1.08V9.73h-1.08v1.082h8.648V8.65h-1.08Z"
          clip-rule="evenodd"
        />
      </g>
      <g mask="url(#fill-mask02)">
        <path
          fill="#AA0E0E"
          fill-rule="evenodd"
          d="M1.082 38.918h37.836V1.082H1.082v37.836ZM2.164 9.73V2.164H9.73V9.73H2.164Zm1.078-1.082h5.406V3.242H3.242v5.406Zm1.082-4.324h3.242v3.242H4.324V4.324Zm25.946-2.16V9.73h7.566V2.164H30.27Zm6.488 6.484h-5.406V3.242h5.406v5.406Zm-1.082-4.324h-3.242v3.242h3.242V4.324ZM2.164 37.836V30.27H9.73v7.566H2.164Zm1.078-1.078h5.406v-5.406H3.242v5.406Zm1.082-4.324h3.242v3.242H4.324v-3.242ZM30.27 30.27h1.082v1.082H30.27V30.27Zm-2.16 7.566v-4.324h2.16v4.323h1.082v-4.323h2.16v-5.403l-5.402.001v-8.65h-3.246v-3.246l2.163.001h1.082V9.73h-1.082v5.407h-2.164V2.164h-1.078V15.137h-2.164V9.73h-1.08v6.485h3.245v3.246H20.54v18.375h1.082V20.54h2.164v17.297h1.078V20.54h2.164v17.297h1.082Zm1.078-5.402h3.246v-3.246h-3.246v3.246ZM9.73 15.137H4.324v4.324h1.082v-3.246H9.73v-1.078Zm0 2.16H8.648v1.082H9.73v-1.082Zm0 2.164H8.648v-1.082h-2.16v1.082h2.16v1.078H9.73V19.46Zm0 2.16H8.648v-1.08H2.164v1.08h6.484v1.082H9.73V21.62Zm0 2.164H8.648v1.078H9.73v-1.078Zm-1.082 2.16H3.242v2.164H9.73v1.078H8.648v.001H2.164v-4.325h6.484v1.082H9.73v1.082H8.648v-1.082ZM9.73 12.973H8.648v1.082H9.73v-1.082Zm0-2.16H8.648v1.077H4.324v1.082h4.324v-1.081H9.73v-1.078Zm6.485-2.165h-1.078V7.566h2.16V6.488h-6.484v1.078h3.242v1.082h1.082V9.73h1.078V8.648Zm2.164 0h-1.082V9.73h1.082V8.648Zm1.082 0h-1.082V4.324h-7.567v-2.16h1.08v1.077l7.57.001v5.406h1.077V9.73H19.46V8.648Zm3.242 0H21.62V9.73h1.082V8.648Zm4.324 0h-1.082V9.73h1.082V8.648Zm2.16 0h-1.078l.001 1.082h1.077V8.648Zm-15.132 0h-1.082V9.73h1.082V8.648Zm-2.164 0h-1.078l-.001 1.082h1.079V8.648Zm24.866 7.567h1.08v-5.402h-1.079v4.324h-2.164v-4.325h-1.082v4.325h-2.16v-4.325H30.27v5.403h3.242v3.246H30.27v8.648h1.082v-7.57h2.16v17.297h1.082V20.54h2.164v17.297h1.078V19.46h-3.242v-3.246l2.163.001ZM2.165 10.813h1.078v8.648H2.164l.001-8.648ZM18.38 9.73h1.082v9.73H18.38V9.73Zm3.241-6.489H20.54l.001 5.406h1.081V3.241Zm6.488 0h-1.082v5.406h1.082V3.241Zm-9.73 32.434v-7.567h1.082v8.65h-2.164v1.077h-1.082v-1.078h-2.16v-8.649h1.082v7.567h1.078v-8.649h1.082v8.65h1.082Zm-6.488-7.567v8.65h2.163v1.077h-3.242v-8.649H9.73v-1.078h2.161Zm-2.16-2.162V20.54h9.73v5.406H9.73Zm2.16-1.082h5.406v-3.242H11.89v3.242Zm4.324-12.974V9.73h1.081v9.731h-1.082v-6.488h-3.242v6.488H9.73V18.38h2.16v-2.164H9.73v-1.078h2.16v-2.164H9.73V11.89h2.16V9.73h1.083v2.16h3.242ZM40 0H0v40h40V0Z"
          clip-rule="evenodd"
        />
      </g>
    </svg>
  </div>
</template>

<style scoped>
#fill-mask01 .mask-anim {
  opacity: 1;
  animation: fillUp01 5s infinite linear;
}
#fill-mask02 .mask-anim {
  opacity: 0;
  animation: fillUp02 5s infinite linear;
}

@keyframes fillUp01 {
  0% {
    opacity: 1;
    transform: translateY(100%);
  }
  20% {
    opacity: 1;
    transform: translateY(0%);
  }
  40% {
    opacity: 1;
    transform: translateY(0%);
  }
  50% {
    opacity: 0;
    transform: translateY(0%);
  }
  100% {
    opacity: 0;
    transform: translateY(0%);
  }
}
@keyframes fillUp02 {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  50% {
    opacity: 0;
    transform: translateY(100%);
  }
  51% {
    opacity: 1;
    transform: translateY(100%);
  }
  70% {
    opacity: 1;
    transform: translateY(0%);
  }
  90% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 0;
    transform: translateY(0%);
  }
}
</style>
