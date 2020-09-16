import React, { Component } from 'react';
import { connect } from 'react-redux';
import modalBackDrop from '../ModalBackDrop/ModalBackDrop';
import quizInfoOperations from '../../redux/operations/quizInfoOperations';
import quizInfoSelectors from '../../redux/selectors/quizInfoSelectors';
import styles from './ModalInterview.module.css';

class ModalInterview extends Component {
  state = {
    smokeYears: 0,
    cigarettePerDay: 0,
    cigarettePerTime: 0,
    cigarettePackPrice: 0,
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddInfo(this.state);
    this.props.close();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      smokeYears,
      cigarettePerDay,
      cigarettePerTime,
      cigarettePackPrice,
    } = this.state;
    const { error } = this.props;
    // console.log(error);
    return (
      <section className={styles.modalInterview}>
        <header
          className={styles.sectionHeader}
          style={{ marginBottom: `${error ? '20px' : '40px'}` }}
        >
          <h2 className={styles.title}>Ответьте на 4 коротких вопроса.</h2>
          <p className={styles.description}>
            Так мы сможем более точно дать вам рекомендации:
          </p>
          {error && (
            <h3 className={styles.error}>
              Извините, произошла ошибка: {error.message}{' '}
            </h3>
          )}
        </header>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            Сколько лет Вы курите?
            <input
              className={styles.input}
              type="number"
              name="smokeYears"
              value={smokeYears ? smokeYears : ''}
              required
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Сколько сигарет скуриваете в день?
            <input
              className={styles.input}
              type="number"
              name="cigarettePerDay"
              value={cigarettePerDay ? cigarettePerDay : ''}
              required
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Сколько вемени у Вас уходит
            <br />
            на 1 сигарету?
            <input
              className={styles.input}
              type="number"
              name="cigarettePerTime"
              value={cigarettePerTime ? cigarettePerTime : ''}
              required
              placeholder="__ мин"
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Сколько стоит одна пачка сигарет?
            <input
              className={styles.input}
              type="number"
              name="cigarettePackPrice"
              value={cigarettePackPrice ? cigarettePackPrice : ''}
              required
              placeholder="__.__ грн"
              onChange={this.handleChange}
            />
          </label>
          <button
            className="btnTransparentWhiteBorder"
            type="submit"
            style={{ margin: '0 auto' }}
          >
            Сохранить
          </button>
          <p>&nbsp;</p>
          <button
            className={styles.button}
            type="button"
            onClick={() => this.props.onGetInfo()}
          >
            Fetch
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  error: quizInfoSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  onAddInfo: info => dispatch(quizInfoOperations.addInfo(info)),
  onGetInfo: () => dispatch(quizInfoOperations.fetchInfo()),
});

export default modalBackDrop(
  connect(mapStateToProps, mapDispatchToProps)(ModalInterview),
);
