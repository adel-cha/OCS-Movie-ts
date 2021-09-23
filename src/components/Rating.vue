<template>
  <div class="rating">
    <ul class="list">
      <li  v-for="star in maxStars" :class="{ 'active': star <= stars }" :key="star.stars" class="star">
      <fa icon="star"></fa> 
      </li>
    </ul>
    <div v-if="hasCounter" class="info counter">
      <span class="score-rating">{{ stars }}</span>
      <span class="divider">/</span>
      <span class="score-max">{{ maxStars }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Rating',
    props: ['grade', 'maxStars', 'hasCounter'],
    data() {
        return {
        stars: this.grade
        }
    }
})
</script>

<style scoped lang="scss">
  .rating {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #b7b7b7;
    .list {
        padding: 0;
        margin: 0 20px 0 0;
      
        .star {
            display: inline-block;
            font-size: 18px;
            transition: all .2s ease-in-out; 
            cursor: pointer;
            &:hover {
                ~ .star:not(.active) {
                    color: inherit;
                }
            }
            &:first-child {
                margin-left: 0;
            }
            &.active {
                color: #ff9800;
            }
        }
    }
    .info {
        margin-top: 10px;
        font-size: 20px;
        text-align: center;
        display: table;
        .divider {
            margin: 0 5px;
            font-size: 30px;
        }
        .score-max {
            font-size: 25px;
            vertical-align: sub;
        }
    }
}
</style>