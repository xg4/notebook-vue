<template>
    <div class="number-board">
        <div class="number-board-item" v-for="(b,i) in board" :key='i'>
            <router-link v-if="b.link" :to="b.link">
                <div class="number-board-item-inner">
                    <div class="number-board-item-name">
                        {{b.name}}
                    </div>
                    <strong class="number-board-item-value" :style="{color:b.color}">
                        {{b.value}}
                    </strong>
                </div>
            </router-link>
            <template v-else>
                <div class="number-board-item-inner">
                    <div class="number-board-item-name">
                        {{b.name}}
                    </div>
                    <strong class="number-board-item-value" :style="{color:b.color}">
                        {{b.value}}
                    </strong>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
  name: "xg-number-board",
  props: ["board"]
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.number-board {
  display: flex;
  background: #fff;
  border-bottom: 1px solid #ddd;
}
.number-board-item {
  flex: 1;
  padding: 15px;
  border-right: 1px solid #ddd;
}
.number-board-item:last-child {
  border-right: none;
}
.number-board-item-inner {
  text-align: center;
  line-height: 1.6;
}
.number-board-item-name {
  font-size: 14px;
  color: #666;
  font-weight: 700;
}
.number-board-item-value {
  display: inline-block;
  font-size: 18px;
  color: #1a1a1a;
  font-weight: 600;
}
</style>