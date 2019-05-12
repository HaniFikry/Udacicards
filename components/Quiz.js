import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { DeckDetails } from "./DeckDetails";

export class Quiz extends Component {
  state = {
    score: 0,
    currentQuestion: 0,
    showAnswer: false,
    quizEnded: false
  };

  answerQuestion(answer) {
    const { deck } = this.props.navigation.state.params;
    const end = deck.questions.length;
    if (answer === "Correct") {
      this.setState(state => ({
        score: state.score + 1,
        currentQuestion:
          state.currentQuestion + 1 < end
            ? state.currentQuestion + 1
            : state.currentQuestion,
        showAnswer: false,
        quizEnded: state.currentQuestion + 1 < end ? false : true
      }));
    } else {
      this.setState(state => ({
        currentQuestion:
          state.currentQuestion + 1 < end
            ? state.currentQuestion + 1
            : state.currentQuestion,
        showAnswer: false,
        quizEnded: state.currentQuestion + 1 < end ? false : true
      }));
    }
  }

  showAnswer = () => {
    this.setState({
      showAnswer: true
    });
  };

  restartQuiz = () => {
    this.setState({
      score: 0,
      currentQuestion: 0,
      showAnswer: false,
      quizEnded: false
    });
  };

  render() {
    const { deck } = this.props.navigation.state.params;
    const { questions } = deck;
    if (this.state.quizEnded) {
      return (
        <View style={{flex: 1, alignItems: "center", justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}> Score: {this.state.score}</Text>
          <View>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "black" }]}
              onPress={() => this.restartQuiz()}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Restart Quiz
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "black" }]}
              onPress={() =>
                this.props.navigation.navigate("DeckDetails", { deck })
              }
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Back to Deck
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            {" "}
            {this.state.currentQuestion + 1} / {questions.length}{" "}
          </Text>
          <Text style={{ fontSize: 30, textAlign: "center" }}>
            {" "}
            {questions[this.state.currentQuestion].question}{" "}
          </Text>
          <TouchableOpacity onPress={this.showAnswer}>
            <Text
              style={{
                color: "#b71845",
                textAlign: "center",
                fontWeight: "bold",
                paddingTop: 5
              }}
            >
              {" "}
              {this.state.showAnswer
                ? questions[this.state.currentQuestion].answer
                : "Answer"}{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "green" }]}
            onPress={() => this.answerQuestion("Correct")}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "red" }]}
            onPress={() => this.answerQuestion("InCorrect")}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around"
  },
  button: {
    backgroundColor: "#000",
    padding: 20,
    borderRadius: 7,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  }
});

export default Quiz;
