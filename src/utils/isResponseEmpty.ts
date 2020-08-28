export default async (response: Response) => {
  try {
    const contentType = response.headers.get('content-type');
    const itsJson = contentType && contentType.indexOf('application/json') !== -1;

    if (itsJson) return false;

    const itsText = await response.text();
    if (typeof itsText === 'string' && itsText.length < 1) return true;

    return false;
  } catch {
    return true;
  }
};
