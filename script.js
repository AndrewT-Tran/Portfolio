body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #999;
}

.box {
  background: white;
  padding: 16px 24px;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.01);
}
.box::after {
  position: absolute;
  content: "";
  top: 15px;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  transform: scale(0.9) translateZ(0);
  filter: blur(15px);
  background: linear-gradient(to left, #ff5770, #e4428d, #c42da8, #9e16c3, #6501de, #9e16c3, #c42da8, #e4428d, #ff5770);
  background-size: 200% 200%;
  -webkit-animation: animateGlow 1.25s linear infinite;
          animation: animateGlow 1.25s linear infinite;
}

@-webkit-keyframes animateGlow {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

@keyframes animateGlow {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}