const commentFormHandler = async (event) => {
    event.preventDefault();

    const text_content = document.getElementById('postTitle').value.trim();
    
    if (text_content && text_content.length > 0) {
        const response = await fetch('/api/comments/', {
          method: 'POST',
          body: JSON.stringify({ text_content }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            console.log('comment generated')
          document.location.reload();

        } else {
            console.log('comment failed')
          alert(response.statusText);
        }
      }
};

const commentForm = document.getElementById('commentForm');

commentForm.addEventListener('submit', commentFormHandler)