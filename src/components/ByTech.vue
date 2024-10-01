<script setup></script>

<template>
  <footer id="YHACK" class="TECH">
    <!-- If you are a Yale student reading this, -->
    <!--  consider joining the YHack Tech team!  -->
    <div class="madewithloveby flx">
      <h1 class="yhacktech">
        Made with 💜 by the
        <RouterLink to="/team" class="linktoteam">YHack Team</RouterLink>!
      </h1>
      <h2 class="copyright">© 2024 YHack. All Rights Reserved.</h2>
      <p class="codeofconduct">
        <a
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
          rel="noopener noreferrer"
          >Code of Conduct.
        </a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 2rem 0.25rem;
}
@media only screen and (max-width: 767px) {
  footer {
    padding: 6rem 1rem 2rem 1rem;
  }
}
.madewithloveby {
  text-align: center;
  flex-direction: column;
}
.copyright {
  font-weight: 400;
}
.codeofconduct {
  padding-top: 0.5rem;
}
.codeofconduct a {
  font-size: 0.75rem;
  font-style: italic;
  text-decoration: underline;
  color: #f8e1ff;
}
@media (hover: hover) {
  .codeofconduct a:hover {
    text-decoration: underline;
  }
}
.linktoteam {
  text-decoration: underline;
  color: #f8e1ff;
}
</style>
