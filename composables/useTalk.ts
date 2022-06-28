import list from "../talks.json";

export const useTalks = () => {
  const talks = ref(list);

  const findById = (id) => talks.value.find((t) => t.id === id);

  const humanDuration = (duration: number): string =>
    duration > 100 ? `${duration / 60}h` : `${duration}min`;

  return {
    talks,
    findById,
    humanDuration,
  };
};
