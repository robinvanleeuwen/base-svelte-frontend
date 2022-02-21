<script>
    export let label
    export let value
</script>

<div class="relative mb-4">
    <label for={label} class="text-sm leading-7 text-gray-600">{label}</label>
    <input id={label} name={label} bind:value {...$$restProps}
        class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
</div>