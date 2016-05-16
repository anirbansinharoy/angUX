package org.asr.entity;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Question {
	public Question() {
	}

	public Question(int serial, String content, int marks) {
		super();
		this.serial = serial;
		this.content = content;
		this.marks = marks;
	}

	private int serial;

	public int getSerial() {
		return serial;
	}

	public void setSerial(int serial) {
		this.serial = serial;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getMarks() {
		return marks;
	}

	public void setMarks(int marks) {
		this.marks = marks;
	}

	private String content;
	private int marks;
}
