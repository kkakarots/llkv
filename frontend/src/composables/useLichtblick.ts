import { ref, onUnmounted } from 'vue';
// 直接引入 Lichtblick 的原生 TS 类
import FoxgloveWebSocketPlayer from '../../packages/suite-base/src/players/FoxgloveWebSocketPlayer';

export function useLichtblick(url: string = 'ws://127.0.0.1:8765') {
  const messages = ref<any[]>([]);
  const isConnected = ref(false);

  // 初始化 Player
  const player = new FoxgloveWebSocketPlayer({
    url,
    name: "VuePlayer"
  });

  // 监听状态变化
  player.setListener(async (state) => {
    // state.activeData 是当前帧的数据
    if (state.activeData) {
      // 打印一下看看有没有抓到你 Python 发来的 topic
      console.log("收到数据帧，包含话题数:", state.activeData.messages.length);
      messages.value = state.activeData.messages;
    }

    // 更新连接状态
    isConnected.value = !state.problems?.some(p => p.severity === 'error');
  });

  // 开启播放 (相当于开启 WebSocket 连接)
  player.play();

  onUnmounted(() => {
    player.close();
  });

  return {
    messages,
    isConnected,
    player
  };
}
