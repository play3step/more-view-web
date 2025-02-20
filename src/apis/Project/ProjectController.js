import basicApi from '..';

export const getProjectList = async (memberId, page = 0) => {
  try {
    const response = await basicApi.get(`api/project/member/${memberId}`, {
      params: {
        page,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  try {
    const response = await basicApi.post(`api/file`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export const postProject = async (title, fileUrl, memberId) => {
  try {
    const data = {
      name: title,
      thumbnailUrl: fileUrl,
      memberId,
    };
    const response = await basicApi.post('api/project', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 그룹 초대

export const inviteProject = async (roomId, memberId) => {
  try {
    const data = {
      roomId,
      memberId,
    };
    const response = await basicApi.post(`api/project/member`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
