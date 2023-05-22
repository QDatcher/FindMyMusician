const postFormHandler = async (event) => {
    event.preventDefault();

    const title = document.getElementById('postTitle').value.trim();
    const text_content = document.getElementById('postContent').value.trim();
    const tag = document.getElementById('postTag').value.trim();
    if (title, text_content, tag) {
        const response = await fetch('/api/posts/', {
          method: 'POST',
          body: JSON.stringify({ title, text_content, tag }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            console.log('post generated')
          document.location.replace('/');

        } else {
            console.log('post failed')
          alert(response.statusText);
        }
      }
};

const postForm = document.getElementById('postForm');

postForm.addEventListener('submit', postFormHandler)