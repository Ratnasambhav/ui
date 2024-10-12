<script setup lang="ts">
import { ref, type Ref, onMounted, onUnmounted } from 'vue';

const trigger: Ref<HTMLElement | null> = ref(null);
const content: Ref<HTMLElement | null> = ref(null);

const isHovering = ref(false);
const mousePosition = ref({ x: 0, y: 0 });

const OFFSET = 8;
const HORIZONTAL_PADDING =
  ((document.querySelector('body')?.getBoundingClientRect()?.width || 0) -
    (document.querySelector('main')?.getBoundingClientRect()?.width || 0)) /
  2;

const onMouseEnter = () => {
  isHovering.value = true;
  updateTooltipPosition();
};

const onMouseLeave = () => isHovering.value = false;

const onMouseMove = (event: MouseEvent) => {
  if (isHovering.value) {
    mousePosition.value = { x: event.clientX, y: event.clientY };
    updateTooltipPosition();
  }
};

const updateTooltipPosition = () => {
  if (!isHovering.value) return;

  const newPosition = calculatePosition();
  if (newPosition instanceof Error) {
    console.error(newPosition.message);
    return;
  }

  if (content.value) {
    Object.assign(content.value.style, {
      top: `${newPosition.y}px`,
      left: `${newPosition.x}px`,
    });
  }
};

const calculatePosition = (): { x: number; y: number } | Error => {
  const tRect = trigger.value?.getBoundingClientRect();
  if (!tRect) {
    return new Error("Trigger ref DOMRect is undefined");
  }

  const cRect = content.value?.getBoundingClientRect();
  if (!cRect) {
    return new Error("Content ref DOMRect is undefined");
  }

  // Calculate tooltip position based on mouse position & constrain within trigger boundaries
  return {
    x: Math.max(
      tRect.left - HORIZONTAL_PADDING,
      Math.min(
        mousePosition.value.x - cRect.width / 2 - HORIZONTAL_PADDING,
        tRect.right - cRect.width - HORIZONTAL_PADDING
      )
    ),
    y: Math.max(
      tRect.top - cRect.height - OFFSET,
      mousePosition.value.y - cRect.height - OFFSET
    )
  };
};

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove);
});
</script>

<template>
  <div
    ref="trigger"
    @mouseenter.stop="onMouseEnter"
    @mouseleave.stop="onMouseLeave"
  >
    <slot name="trigger"></slot>
  </div>
  <div
    ref="content"
    v-if="isHovering"
    class="absolute w-max px-2 py-1 bg-transparent backdrop-blur text-text-main rounded-md shadow"
  >
    <slot name="content"></slot>
  </div>
</template>
