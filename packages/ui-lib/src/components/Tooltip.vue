<script setup lang="ts">
  import { ref, type Ref } from 'vue';

  const { position = 'top' } = defineProps<{ position?: 'top' | 'right' | 'bottom' | 'left' }>()

  const arrow: Ref<HTMLElement | null> = ref(null);
  const trigger: Ref<HTMLElement | null> = ref(null);
  const content: Ref<HTMLElement | null> = ref(null);

  const onMouseEnter = () => {
    content.value?.classList.remove('hidden');

    const position = calculatePosition();

    if (content.value && arrow.value && position) {
      Object.assign(content.value.style, {
        top:`${position.content.y}px`,
        left: `${position.content.x}px`
      });
      Object.assign(arrow.value.style, {
        top:`${position.arrow.y}px`,
        left: `${position.arrow.x}px`
      })
    }
  }

  const onMouseLeave = () => {
    content.value?.classList.add('hidden');
  }

  const calculateHorizontalPadding = () => {
    const bodyRect = document.querySelector('body')?.getBoundingClientRect();
    const mainRect = document.querySelector('main')?.getBoundingClientRect();
    return (bodyRect && mainRect) ? (bodyRect?.width - mainRect?.width) / 2 : 0;
  }

  const calculatePosition = (): {
    content: {x: number, y: number},
    arrow: { x: number, y: number },
  } | null => {
    const OFFSET = 8; // Tooltip content's horizontal padding
    const ARROW_DIAGONAL = 12 * Math.SQRT2;
    const tRect = trigger.value?.getBoundingClientRect();
    const cRect = content.value?.getBoundingClientRect();
    const horizontalPadding = calculateHorizontalPadding();

    if (!tRect || !cRect) {
      return null
    }

    switch (position) {
      case 'top':
        return {
          content: {
            x: tRect.x + (tRect.width / 2) - (cRect.width / 2) - horizontalPadding,
            y: tRect.y - (tRect.height / 2) - OFFSET,
          },
          arrow: {
            x: (cRect.width - ARROW_DIAGONAL) / 2,
            y: cRect.height - (ARROW_DIAGONAL / 2),
          }
        };

      case 'right':
        return {
          content: {
            x: tRect.x + tRect.width - horizontalPadding + OFFSET,
            y: tRect.y + (tRect.height / 2) - (cRect.height / 2)
          },
          arrow: {
            x: (ARROW_DIAGONAL - OFFSET) / 2,
            y: (cRect.height - ARROW_DIAGONAL + 4) / 2,
          }
        };

      case 'bottom':
        return {
          content: {
            x: tRect.x + (tRect.width / 2) - (cRect.width / 2) - horizontalPadding,
            y: tRect.y + tRect.height + OFFSET
          },
          arrow: {
            x: (cRect.width - ARROW_DIAGONAL) / 2,
            y: -(OFFSET / 2),
          }
        };

      case 'left':
        return {
          content: {
            x: tRect.x - cRect.width - horizontalPadding - OFFSET,
            y: tRect.y + (tRect.height / 2) - (cRect.height / 2)
          },
          arrow: {
            x: cRect.width - (ARROW_DIAGONAL) / 2,
            y: (cRect.height - ARROW_DIAGONAL + 4) / 2,
          }
        };
    }
  }
</script>

<template>
    <div ref="trigger" @mouseenter.stop="onMouseEnter" @mouseleave.stop="onMouseLeave">
        <slot name="trigger"></slot>
    </div>
    <div ref="content" class="absolute hidden w-max px-2 bg-surface-3 text-text-main rounded-md shadow-md isolate">
        <div ref="arrow" class="absolute w-3 h-3 rotate-45 bg-inherit z-[-1]" role="presentation"></div>
        <slot name="content"></slot>
    </div>
</template>
