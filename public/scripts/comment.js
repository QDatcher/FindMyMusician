const commentFormHandler = async (event) => {
    event.preventDefault();

    const text_content = document.getElementById('commentContent').value.trim();
    const post_id = commentForm.getAttribute('data-postID')
    console.log(post_id)
    
    if (text_content && text_content.length > 0) {
        const response = await fetch('/api/comments/', {
          method: 'POST',
          body: JSON.stringify({ text_content, post_id }),
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