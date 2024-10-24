abstract class Media {
  abstract play(): void;
}

class CustomAudio extends Media {
  play(): void {
    console.log("Playing audio");
  }
}

class Video extends Media {
  play(): void {
    console.log("Playing video");
  }
}

// Создаем массив типа Media[]
const mediaItems: Media[] = [new Audio(), new Video()];

// Вызываем метод play для каждого элемента массива
mediaItems.forEach(media => media.play());
