module.exports = {
  apps: [
    {
      name: "Hoegomoim-FE",
      script: "./server.js",
      instances: 0, // 앱 인스턴스의 수
      exec_mode: "cluster", // 실행 모드.
      env: {
        // 환경변수. 모든 배포 환경에서 공통으로 사용한다.
        NODE_ENV: "production",
      },
      combine_logs: true,
    },
  ],
};
