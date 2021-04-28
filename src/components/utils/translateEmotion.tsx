export const translateEmotion = (emotion: string | undefined) => {
  // 0 – gniew, 1 – odraza, 2 – strach, 3 – szczęście, 4 – smutek, 5 – zdziwienie, 6 – neutralna
  // label_dict = {0: 'Angry', 1: 'Disgust', 2: 'Fear', 3: 'Happy', 4: 'Neutral', 5: 'Sad', 6: 'Surprise'}
  let translated: string
  if (emotion) {
    switch (emotion) {
      case 'Angry' || 'angry':
        return 'Gniew'
      case 'Disgust' || 'disgust':
        return 'Odraza'
      case 'Fear' || 'fear':
        return 'Strach'
      case 'Happy' || 'happy':
        return 'Szczęście'
      case 'Neutral' || 'neutral':
        return 'Neutralna'
      case 'Sad' || 'sad':
        return 'Smutek'
      case 'Surprise' || 'surprise':
        return 'Zdziwienie'
      default:
        return emotion
    }
  }
}