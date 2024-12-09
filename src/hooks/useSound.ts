import { useCallback, useEffect, useRef, useState } from 'react'

export const useSound = (src: string) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const handleEnded = () => setIsPlaying(false)

  useEffect(() => {
    audioRef.current = new Audio(src)
    audioRef.current.volume = 0.1
    audioRef.current.onended = handleEnded

    return () => {
      audioRef.current?.pause()
      audioRef.current = null
    }
  }, [src])

  const play = useCallback(() => {
    if (!audioRef.current) return
    const audio = audioRef.current

    if (isPlaying) {
      audio.pause()
      audio.currentTime = 0
      setIsPlaying(false)
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.error('Ошибка воспроизведения аудио:', error))
    }
  }, [isPlaying])

  return [play] as const
}
