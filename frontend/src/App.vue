<script setup lang="ts">
import { useLichtblick } from './composables/useLichtblick';

// 这里的端口要和你 Python 脚本里的 --port (默认 8765) 对上
const { isConnected, messages } = useLichtblick('ws://127.0.0.1:8765');
</script>

<template>
  <main style="padding: 20px; font-family: sans-serif;">
    <h1>Lichtblick 核心移植测试</h1>

    <div :style="{ color: isConnected ? 'green' : 'red' }">
      状态: {{ isConnected ? '✅ 已连接到 Python 脚本' : '❌ 未连接 (请启动 Python 脚本)' }}
    </div>

    <div v-if="messages.length > 0" style="margin-top: 20px;">
      <h3>实时话题列表:</h3>
      <ul>
        <li v-for="(msg, idx) in messages" :key="idx">
          Topic: <strong>{{ msg.topic }}</strong> |
          Time: {{ msg.logTime }}
        </li>
      </ul>
    </div>
    <div v-else-if="isConnected">
      正在等待 Python 脚本发送 MCAP 数据...
    </div>
  </main>
</template>
