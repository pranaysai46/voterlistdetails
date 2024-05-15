import { Component, OnInit } from '@angular/core';
interface Candidate {
  candidateName: string;
  votes: number;
}

interface Voter {
  voterName: string;
  hasVoted: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  candidates: Candidate[] = [];
  voters: Voter[] = [];
  newCandidate: string = '';
  newVoter: string = '';
  selectedCandidate: Candidate = null;
  selectedVoter: Voter = null;
  candi: any;
  voti: any;

  ngOnInit(): void {}
  addCandidate() {
    if (this.newCandidate.trim() !== '') {
      this.candidates.push({ candidateName: this.newCandidate, votes: 0 });
      this.newCandidate = '';
    }
  }

  deleteCandidate(candidate: Candidate) {
    this.candidates = this.candidates.filter((c) => c !== candidate);
  }

  addVoter() {
    if (this.newVoter.trim() !== '') {
      this.voters.push({ voterName: this.newVoter, hasVoted: false });
      this.newVoter = '';
    }
  }

  deleteVoter(voter: Voter) {
    this.voters = this.voters.filter((v) => v !== voter);
  }

  castVote() {
    // this.selectedCandidate = localStorage.getItem('candi');
    // this.selectedVoter = localStorage.getItem('voti');
    // if (this.selectedCandidate && this.selectedVoter) {
    //   this.selectedCandidate.votes++;
    //   this.selectedVoter.hasVoted = true;
    //   this.selectedCandidate = null;
    //   this.selectedVoter = null;
    // }
    let i = this.candidates.findIndex(
      (x) => x.candidateName == localStorage.getItem('Candidatename')
    );
    this.voters[i].hasVoted = true;

    let ii = this.voters.findIndex(
      (x) => x.voterName == localStorage.getItem('Votername')
    );
    this.candidates[ii].votes++;
  }

  cand() {
    if (this.candi.trim() !== '') {
      localStorage.setItem('Candidatename', this.candi);
      this.selectedCandidate.candidateName = this.candi;
    }
  }

  vote() {
    if (this.voti.trim() !== '') {
      localStorage.setItem('Votername', this.voti);
      this.selectedVoter.voterName = this.voti;
    }
  }
}
