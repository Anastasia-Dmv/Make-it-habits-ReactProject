import React, { useState } from "react";
import style from "./HabitTemplate.module.css";
import CustomScrollbars from "../../assests/scroll/scroll";
import Modal from "../ModalBackDrop/ModalBackDrop";
import CastomHabit from "../CustomHabit/CastomHabit";
import modalBackDrop from "../ModalBackDrop/ModalBackDrop";
import HabitChoice from "../HabitChoice/HabitChoice";

const templateHabits = [
  "Начинать утро с 10-15 минутной зарядки",
  "Планировать свой день.",
  "Вставать на 30 мин раньшьше обычного .",
  "Читать минимум 30 мин в день",
  "Замена выкуриной сигареты половинкой киви.",
  "5 минутная зарядка для глаз (обед).",
  "Принять контрасный душ.",
  "5 минут отдыха после 25 концентрации.",
  "Выходить на 15 минут раньше от времени",
  "Раз в неделлю проводить медитацию.",
  "Попробывать что то новое .",
  "Начинать робочий день с подготовки стола",
];

const HabitTemplate = () => {
  const [isShowCustomModal, setIsShowCustomModal] = useState(false);
  const [isShowHabitChoice, setIsShowHabitChoice] = useState(false);

  const showHabitChoice = () => {
    setIsShowHabitChoice(true);
  };

  const closeHabitChoice = () => {
    setIsShowHabitChoice(false);
  };

  const [habit, setHabit] = useState("");
  const changeCurrentHabit = (habit) => {
    setHabit(habit);
  };
  const chooseHabit = (habit) => {
    showModal();
    changeCurrentHabit(habit);
  };
  const showModal = () => {
    setIsShowCustomModal(true);
  };
  const closeModal = () => {
    setIsShowCustomModal(false);
  };
  return (
    <>
      <div className={style.habbitTemplateWrapper}>
        <h2 className={style.habitTemplateTitle}>Шаблонные привычки</h2>
        <CustomScrollbars style={{ width: 440, height: 300 }}>
          <ul className={style.habitTemplateList}>
            {templateHabits.map((habit) => (
              <li
                key={habit}
                className={style.habitTemplateItem}
                data-value={habit}
              >
                <button
                  onClick={() => chooseHabit(habit)}
                  className={style.habitTemplateItemLink}
                >
                  {habit}
                </button>
              </li>
            ))}
          </ul>
        </CustomScrollbars>
        {isShowCustomModal && (
          <CastomHabit chosenHabit={habit} close={closeModal} />
        )}
        {isShowHabitChoice && <HabitChoice close={closeHabitChoice} />}
        <button
          onClick={showHabitChoice}
          className={style.btnTransparentWhiteBorder}
        >
          Назад
        </button>
      </div>
    </>
  );
};

export default modalBackDrop(HabitTemplate);
