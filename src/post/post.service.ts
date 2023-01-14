import { API_BASE_URL } from '../app/app.config';
import Post from './show/post-show.store';

// 处理post中的文件
export const postFileProcess = (post: Post) => {
  let { file } = post;

  if (file) {
    const { id: fileId, width, height } = file;
    const fileBaseURL = `${API_BASE_URL}/files/${fileId}/serve`;
    const orientation = width > height ? 'horizontal' : 'portrait';

    file = {
      ...file,
      orientation,
      size: {
        thumbnail: `${fileBaseURL}?size=thumbnail`,
        medium: `${fileBaseURL}?size=medium`,
        large: `${fileBaseURL}?size=large`,
      },
    };

    post = {
      ...post,
      file,
    };
  }

  return post;
};
