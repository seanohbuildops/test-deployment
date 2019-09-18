import S3Helper from '../../../src/classes/utils/s3-helper/s3-helper-ocr';

const vision = require('@google-cloud/vision');

module.exports.handler = async (event, context) => {
  return extractData(event.imageUrl);
};

const extractData = async (imageUrl) => {
  /*
  const credentials = {
    "client_email": process.env.GOOGLE_OCR_CLIENT_EMAIL,
    "private_key": process.env.GOOGLE_OCR_PRIVATE_KEY,
  };*/
  const credentials = {
      "client_email": "aryan-986@lyrics-171420.iam.gserviceaccount.com",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDNOlz8UbX54bts\n2bUPK0SQfNKFPXbdULqaeYiIN0N+57/BBPL/MpgYL+HI1iaHBbcnaKFB213P9DUr\nzpi+s8p0XzNpYBLA3cwg5OMEe5snfqhqfVvk+0/7mEF11peY8EQxinu2yz3jLnqd\n2RalITML+peFud3d4lKclDS/W0oLRtxOfEC/9yir7ZfTCfdkRpJ1+zDOwSz9oIQ2\n/zh3eqNyep7OAtkRw/cksf39qOOgv/tfs/dGgMexSyA38ZO5QobX0Dz4eOhlwcI3\n7amCTXNpn54lEohU51okxy0WQT9W3WUFZ2OWU7dMPahlJx09W2vERFhcVFyf8Rz8\nenAdKppbAgMBAAECggEAFAa/HnjDbF68gTAzYgdjru0cm+zgsFMENTZpKNBVEUlV\nuw+bvg8MAXGMCPhAv99CZ/bmpCcJs1UOFTgZS/lTvGGygh9iZRifppFp8meKFI4L\nAC07GOVJ1kVyvygmw0FQM5INusuAFARWlG2j2eRF927Hd2tTklHXTuPgISYsMQes\nazJmI1YWuXPH9VhICFC7itIrpF1i9szFMPLlYyEpenuy6YR7KLy/j+yo9yOiv4cX\ntDDvWfLijz7w4uqhQD5gcuXIb31GEzEOVJdQG9u84VmPwPBzH1QbL7u/BinmXhxL\nyI2ooQchwWJ4nzapOfqqtdf3dMTKdnIZ1F5rE3XD4QKBgQD5ciXHbLVdDtDIcGQA\ni5V3FwUXpZd3i5kaqj7cRpVZFYSO7DWIIIomcQI2qQYoLe5NAoP5dDXNIvKC0y3D\nxfAS9lIxmXYR8QTbnPrE0oURI2ZqcDCzCOydicNT/g634LhoyELUZvWsRDy6a/Gb\nCgBnD31OWabWfK4WSdAqkxzpOwKBgQDSnsq8KNzSxwmNbjUamljz5G8BIL35aMd9\ntainyzJnhqiuXczINCBxsJ2MnUKCvu35JHjwLraWGgL4tVGDOx4sEacdjdFsq7vz\n2XGPm9+0jY2PwYzd1rp5ah7swngRK/f0nn3yOccypa4o/1DOEMzllQ2Zs/EbEveL\neQSyChcBYQKBgHMxtKKg4CxmYCKATJ4318FUXySpcwZg8EZxInBlJCksl7fM+3eu\n1z2jaItHiTFa7Lahl8LGWOYv4mBqF7NWIGURXanMHctxS3YDy4bDVXIxr+UthD/Z\nujOSYCLUq4VdAKxa9wnRtlhkdsr8eGnJt5/gdlSNcE+S6m4ejkRrBanrAoGBAMIn\nKOHslSsj2VVrmz5Lu+YP1Jfok9ce1I64b6FFudAfHM2noAeJrcK/uWwO52nZEUvS\naD2YAi46CjU0B9D+JSEgoLmoqr4PTTJLZtioKr6ooi87j1xL/hfAUIOV/NJvgqIX\nnCg3RL4WZoZaXSWn7QlRrnjanE6F3HXQeBibHnvhAoGAe3UkvYGVJO51gzZiUxGW\n3zsLG66L8dXRiNII/AW0Dqao6p9ucdlPEFfEgtNTP1RrY7K+beAfH3LcIY50cAde\nT7vXBn2aUzN45K0YInPAgC5PH7sPF99SmKM2wg1rJi0PFC0eeZ4J/t0ftj/VfMB4\nQEJGcF7FZFL7kzJYTeBaajw=\n-----END PRIVATE KEY-----\n"
  };
  const client = new vision.ImageAnnotatorClient({ credentials });

  const imageRequest = { image: { source: { imageUri: imageUrl }}};

  const [result] = await client.textDetection(imageRequest);
  const detections = result.textAnnotations;
  const words = detections.map(x => x.description);
  return {
    data: words
  };
}
