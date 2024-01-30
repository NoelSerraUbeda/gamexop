const handleTabClick = (containerSelector, contentSelector) => {
  const container = document.querySelector(containerSelector);
  container?.addEventListener("click", (event) => {
      const tab = event.target.closest('.tab');
      if (tab) {
          const tabContentId = tab.getAttribute('data-tab');
          const targetTabContent = document.querySelector(`${contentSelector}[data-tab="${tabContentId}"]`);

          document.querySelectorAll(contentSelector).forEach(content => {
              content.classList.remove('active');
          });

          targetTabContent.classList.add('active');
          container.querySelectorAll('.tab').forEach(tab => {
              tab.classList.remove('selected');
          });

          tab.classList.add('selected');
      }
  });
};

handleTabClick('.tabs', '.tab-content');
handleTabClick('.language-tabs .tabs', '.area');