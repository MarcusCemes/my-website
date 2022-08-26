<div
    class="relative grid min-h-screen select-none grid-cols-[2fr_fit-content(48em)_5fr] grid-rows-[1fr_fit-content(28em)_2fr]"
>
    <div class="x-fly border-16 col-[2] row-[2] border-black px-8 py-4 font-inter text-gray-800">
        <p class="mb-2 text-2xl font-semibold">Hi there, I'm</p>
        <h1 class="text-6xl font-bold">Marcus Cemes</h1>
        <h2 class="mt-2 text-lg tracking-wide text-neutral-800">I'm studying Robotics 🤖</h2>
    </div>
</div>

<style>
    .x-fly > * {
        animation-name: fly;
        animation-duration: 3s;
        animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        animation-fill-mode: both;
    }

    .x-fly > *:nth-child(1) {
        animation-delay: 300ms;
    }

    .x-fly > *:nth-child(2) {
        animation-delay: 600ms;
    }

    .x-fly > *:nth-child(3) {
        animation-delay: 900ms;
    }

    @keyframes fly {
        0% {
            opacity: 0;
            transform: translateX(-3rem);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
</style>
