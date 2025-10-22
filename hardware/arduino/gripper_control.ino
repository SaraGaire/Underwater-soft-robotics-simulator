#include <Servo.h>

Servo gripper;
int openAngle = 0;
int closeAngle = 90;

void setup() {
  gripper.attach(9);
  Serial.begin(9600);
}

void loop() {
  if (Serial.available()) {
    char cmd = Serial.read();
    if (cmd == 'O') gripper.write(openAngle);
    if (cmd == 'C') gripper.write(closeAngle);
  }
}
