const getBody = async (req) => {
  if (!req) {
    console.error('Invalid request provided to getBody.');
    return {};
  }
  try {
    const body = await req.json();
    return body;
  } catch (err) {
    console.error(err);
    return {};
  }
};

export default getBody;
